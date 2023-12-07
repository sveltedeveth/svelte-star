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
export type MdPersonPinCircleProps = typeof __propDef.props;
export type MdPersonPinCircleEvents = typeof __propDef.events;
export type MdPersonPinCircleSlots = typeof __propDef.slots;
export default class MdPersonPinCircle extends SvelteComponentTyped<MdPersonPinCircleProps, MdPersonPinCircleEvents, MdPersonPinCircleSlots> {
}
export {};
