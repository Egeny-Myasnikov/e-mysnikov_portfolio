import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProject extends Document {
	title: string
	description: string
	technologies?: string[]
	images?: string[]
	githubUrl?: string
	liveUrl?: string
	createdAt: Date
	updatedAt: Date
}

const ProjectSchema: Schema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			trim: true,
			maxlength: [120, 'Title cannot be more than 120 characters'],
		},
		description: {
			type: String,
			required: [true, 'Description is required'],
			trim: true,
			maxlength: [1000, 'Description cannot be more than 1000 characters'],
		},
		technologies: [
			{
				type: String,
				trim: true,
				default: '',
			},
		],
		images: [
			{
				type: String,
				trim: true,
				default: '',
			},
		],
		githubUrl: {
			type: String,
			trim: true,
			default: '',
		},
		liveUrl: {
			type: String,
			trim: true,
			default: '',
		},
	},
	{
		timestamps: true,
	}
)

ProjectSchema.index({ createdAt: -1 })

const Projects: Model<IProject> =
	mongoose.models.Projects ||
	mongoose.model<IProject>('Projects', ProjectSchema)

export default Projects
