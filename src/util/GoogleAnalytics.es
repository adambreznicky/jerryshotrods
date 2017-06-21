import ga from 'react-ga'
import secrets from '../secrets/secrets'

ga.initialize(secrets.googleAnalyticsId)

export default ga
