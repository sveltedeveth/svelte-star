import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiTeamIdeaProps = typeof __propDef.props;
export type GiTeamIdeaEvents = typeof __propDef.events;
export type GiTeamIdeaSlots = typeof __propDef.slots;
export default class GiTeamIdea extends SvelteComponentTyped<GiTeamIdeaProps, GiTeamIdeaEvents, GiTeamIdeaSlots> {
}
export {};
