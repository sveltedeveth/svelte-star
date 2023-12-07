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
export type GiHobbitDwellingProps = typeof __propDef.props;
export type GiHobbitDwellingEvents = typeof __propDef.events;
export type GiHobbitDwellingSlots = typeof __propDef.slots;
export default class GiHobbitDwelling extends SvelteComponentTyped<GiHobbitDwellingProps, GiHobbitDwellingEvents, GiHobbitDwellingSlots> {
}
export {};
