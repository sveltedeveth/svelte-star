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
export type MdLocalMallProps = typeof __propDef.props;
export type MdLocalMallEvents = typeof __propDef.events;
export type MdLocalMallSlots = typeof __propDef.slots;
export default class MdLocalMall extends SvelteComponentTyped<MdLocalMallProps, MdLocalMallEvents, MdLocalMallSlots> {
}
export {};
