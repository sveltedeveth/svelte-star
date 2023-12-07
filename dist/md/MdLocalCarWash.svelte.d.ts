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
export type MdLocalCarWashProps = typeof __propDef.props;
export type MdLocalCarWashEvents = typeof __propDef.events;
export type MdLocalCarWashSlots = typeof __propDef.slots;
export default class MdLocalCarWash extends SvelteComponentTyped<MdLocalCarWashProps, MdLocalCarWashEvents, MdLocalCarWashSlots> {
}
export {};
