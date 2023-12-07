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
export type MdCheckCircleProps = typeof __propDef.props;
export type MdCheckCircleEvents = typeof __propDef.events;
export type MdCheckCircleSlots = typeof __propDef.slots;
export default class MdCheckCircle extends SvelteComponentTyped<MdCheckCircleProps, MdCheckCircleEvents, MdCheckCircleSlots> {
}
export {};
