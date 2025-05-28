function ExperienceCard({ title, company, location, date, description }: { title: string, company: string, location: string, date: string, description: string }) {
    return (
        <div className="experience-card">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
}

export default ExperienceCard;