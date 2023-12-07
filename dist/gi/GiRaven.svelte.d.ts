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
export type GiRavenProps = typeof __propDef.props;
export type GiRavenEvents = typeof __propDef.events;
export type GiRavenSlots = typeof __propDef.slots;
export default class GiRaven extends SvelteComponentTyped<GiRavenProps, GiRavenEvents, GiRavenSlots> {
}
export {};
