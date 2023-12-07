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
export type GoMirrorProps = typeof __propDef.props;
export type GoMirrorEvents = typeof __propDef.events;
export type GoMirrorSlots = typeof __propDef.slots;
export default class GoMirror extends SvelteComponentTyped<GoMirrorProps, GoMirrorEvents, GoMirrorSlots> {
}
export {};
