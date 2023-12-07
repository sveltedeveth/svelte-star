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
export type MdFormatBoldProps = typeof __propDef.props;
export type MdFormatBoldEvents = typeof __propDef.events;
export type MdFormatBoldSlots = typeof __propDef.slots;
export default class MdFormatBold extends SvelteComponentTyped<MdFormatBoldProps, MdFormatBoldEvents, MdFormatBoldSlots> {
}
export {};
