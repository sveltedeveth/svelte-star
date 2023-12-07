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
export type IoIosHappyProps = typeof __propDef.props;
export type IoIosHappyEvents = typeof __propDef.events;
export type IoIosHappySlots = typeof __propDef.slots;
export default class IoIosHappy extends SvelteComponentTyped<IoIosHappyProps, IoIosHappyEvents, IoIosHappySlots> {
}
export {};
