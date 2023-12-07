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
export type GoFilePdfProps = typeof __propDef.props;
export type GoFilePdfEvents = typeof __propDef.events;
export type GoFilePdfSlots = typeof __propDef.slots;
export default class GoFilePdf extends SvelteComponentTyped<GoFilePdfProps, GoFilePdfEvents, GoFilePdfSlots> {
}
export {};
