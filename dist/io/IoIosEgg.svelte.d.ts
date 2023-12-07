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
export type IoIosEggProps = typeof __propDef.props;
export type IoIosEggEvents = typeof __propDef.events;
export type IoIosEggSlots = typeof __propDef.slots;
export default class IoIosEgg extends SvelteComponentTyped<IoIosEggProps, IoIosEggEvents, IoIosEggSlots> {
}
export {};
