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
export type MdFormatShapesProps = typeof __propDef.props;
export type MdFormatShapesEvents = typeof __propDef.events;
export type MdFormatShapesSlots = typeof __propDef.slots;
export default class MdFormatShapes extends SvelteComponentTyped<MdFormatShapesProps, MdFormatShapesEvents, MdFormatShapesSlots> {
}
export {};
