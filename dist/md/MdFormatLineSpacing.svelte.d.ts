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
export type MdFormatLineSpacingProps = typeof __propDef.props;
export type MdFormatLineSpacingEvents = typeof __propDef.events;
export type MdFormatLineSpacingSlots = typeof __propDef.slots;
export default class MdFormatLineSpacing extends SvelteComponentTyped<MdFormatLineSpacingProps, MdFormatLineSpacingEvents, MdFormatLineSpacingSlots> {
}
export {};
