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
export type IoIosBeakerProps = typeof __propDef.props;
export type IoIosBeakerEvents = typeof __propDef.events;
export type IoIosBeakerSlots = typeof __propDef.slots;
export default class IoIosBeaker extends SvelteComponentTyped<IoIosBeakerProps, IoIosBeakerEvents, IoIosBeakerSlots> {
}
export {};
