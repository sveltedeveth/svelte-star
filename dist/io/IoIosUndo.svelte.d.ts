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
export type IoIosUndoProps = typeof __propDef.props;
export type IoIosUndoEvents = typeof __propDef.events;
export type IoIosUndoSlots = typeof __propDef.slots;
export default class IoIosUndo extends SvelteComponentTyped<IoIosUndoProps, IoIosUndoEvents, IoIosUndoSlots> {
}
export {};
