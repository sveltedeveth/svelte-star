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
export type IoIosCloudyProps = typeof __propDef.props;
export type IoIosCloudyEvents = typeof __propDef.events;
export type IoIosCloudySlots = typeof __propDef.slots;
export default class IoIosCloudy extends SvelteComponentTyped<IoIosCloudyProps, IoIosCloudyEvents, IoIosCloudySlots> {
}
export {};
