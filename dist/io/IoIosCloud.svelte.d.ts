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
export type IoIosCloudProps = typeof __propDef.props;
export type IoIosCloudEvents = typeof __propDef.events;
export type IoIosCloudSlots = typeof __propDef.slots;
export default class IoIosCloud extends SvelteComponentTyped<IoIosCloudProps, IoIosCloudEvents, IoIosCloudSlots> {
}
export {};
