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
export type GiFlamingSheetProps = typeof __propDef.props;
export type GiFlamingSheetEvents = typeof __propDef.events;
export type GiFlamingSheetSlots = typeof __propDef.slots;
export default class GiFlamingSheet extends SvelteComponentTyped<GiFlamingSheetProps, GiFlamingSheetEvents, GiFlamingSheetSlots> {
}
export {};
