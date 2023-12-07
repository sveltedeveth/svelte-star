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
export type MdFormatSizeProps = typeof __propDef.props;
export type MdFormatSizeEvents = typeof __propDef.events;
export type MdFormatSizeSlots = typeof __propDef.slots;
export default class MdFormatSize extends SvelteComponentTyped<MdFormatSizeProps, MdFormatSizeEvents, MdFormatSizeSlots> {
}
export {};
