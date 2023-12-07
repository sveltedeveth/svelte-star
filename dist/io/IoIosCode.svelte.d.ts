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
export type IoIosCodeProps = typeof __propDef.props;
export type IoIosCodeEvents = typeof __propDef.events;
export type IoIosCodeSlots = typeof __propDef.slots;
export default class IoIosCode extends SvelteComponentTyped<IoIosCodeProps, IoIosCodeEvents, IoIosCodeSlots> {
}
export {};
