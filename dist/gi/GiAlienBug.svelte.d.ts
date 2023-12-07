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
export type GiAlienBugProps = typeof __propDef.props;
export type GiAlienBugEvents = typeof __propDef.events;
export type GiAlienBugSlots = typeof __propDef.slots;
export default class GiAlienBug extends SvelteComponentTyped<GiAlienBugProps, GiAlienBugEvents, GiAlienBugSlots> {
}
export {};
