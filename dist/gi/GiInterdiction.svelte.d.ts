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
export type GiInterdictionProps = typeof __propDef.props;
export type GiInterdictionEvents = typeof __propDef.events;
export type GiInterdictionSlots = typeof __propDef.slots;
export default class GiInterdiction extends SvelteComponentTyped<GiInterdictionProps, GiInterdictionEvents, GiInterdictionSlots> {
}
export {};
