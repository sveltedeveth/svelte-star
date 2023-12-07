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
export type GiEclipseProps = typeof __propDef.props;
export type GiEclipseEvents = typeof __propDef.events;
export type GiEclipseSlots = typeof __propDef.slots;
export default class GiEclipse extends SvelteComponentTyped<GiEclipseProps, GiEclipseEvents, GiEclipseSlots> {
}
export {};
