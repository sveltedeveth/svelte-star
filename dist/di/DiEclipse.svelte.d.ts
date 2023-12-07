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
export type DiEclipseProps = typeof __propDef.props;
export type DiEclipseEvents = typeof __propDef.events;
export type DiEclipseSlots = typeof __propDef.slots;
export default class DiEclipse extends SvelteComponentTyped<DiEclipseProps, DiEclipseEvents, DiEclipseSlots> {
}
export {};
