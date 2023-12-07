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
export type IoIosVideocamProps = typeof __propDef.props;
export type IoIosVideocamEvents = typeof __propDef.events;
export type IoIosVideocamSlots = typeof __propDef.slots;
export default class IoIosVideocam extends SvelteComponentTyped<IoIosVideocamProps, IoIosVideocamEvents, IoIosVideocamSlots> {
}
export {};
