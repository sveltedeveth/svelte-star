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
export type IoIosBrushProps = typeof __propDef.props;
export type IoIosBrushEvents = typeof __propDef.events;
export type IoIosBrushSlots = typeof __propDef.slots;
export default class IoIosBrush extends SvelteComponentTyped<IoIosBrushProps, IoIosBrushEvents, IoIosBrushSlots> {
}
export {};
