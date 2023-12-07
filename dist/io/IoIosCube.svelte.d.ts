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
export type IoIosCubeProps = typeof __propDef.props;
export type IoIosCubeEvents = typeof __propDef.events;
export type IoIosCubeSlots = typeof __propDef.slots;
export default class IoIosCube extends SvelteComponentTyped<IoIosCubeProps, IoIosCubeEvents, IoIosCubeSlots> {
}
export {};
