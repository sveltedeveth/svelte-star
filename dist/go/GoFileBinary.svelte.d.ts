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
export type GoFileBinaryProps = typeof __propDef.props;
export type GoFileBinaryEvents = typeof __propDef.events;
export type GoFileBinarySlots = typeof __propDef.slots;
export default class GoFileBinary extends SvelteComponentTyped<GoFileBinaryProps, GoFileBinaryEvents, GoFileBinarySlots> {
}
export {};
