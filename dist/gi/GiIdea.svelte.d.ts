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
export type GiIdeaProps = typeof __propDef.props;
export type GiIdeaEvents = typeof __propDef.events;
export type GiIdeaSlots = typeof __propDef.slots;
export default class GiIdea extends SvelteComponentTyped<GiIdeaProps, GiIdeaEvents, GiIdeaSlots> {
}
export {};
