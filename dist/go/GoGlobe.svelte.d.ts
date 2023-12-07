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
export type GoGlobeProps = typeof __propDef.props;
export type GoGlobeEvents = typeof __propDef.events;
export type GoGlobeSlots = typeof __propDef.slots;
export default class GoGlobe extends SvelteComponentTyped<GoGlobeProps, GoGlobeEvents, GoGlobeSlots> {
}
export {};
