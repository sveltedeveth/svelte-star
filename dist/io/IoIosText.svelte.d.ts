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
export type IoIosTextProps = typeof __propDef.props;
export type IoIosTextEvents = typeof __propDef.events;
export type IoIosTextSlots = typeof __propDef.slots;
export default class IoIosText extends SvelteComponentTyped<IoIosTextProps, IoIosTextEvents, IoIosTextSlots> {
}
export {};
