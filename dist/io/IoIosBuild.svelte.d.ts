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
export type IoIosBuildProps = typeof __propDef.props;
export type IoIosBuildEvents = typeof __propDef.events;
export type IoIosBuildSlots = typeof __propDef.slots;
export default class IoIosBuild extends SvelteComponentTyped<IoIosBuildProps, IoIosBuildEvents, IoIosBuildSlots> {
}
export {};
