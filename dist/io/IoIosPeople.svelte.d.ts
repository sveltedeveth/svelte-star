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
export type IoIosPeopleProps = typeof __propDef.props;
export type IoIosPeopleEvents = typeof __propDef.events;
export type IoIosPeopleSlots = typeof __propDef.slots;
export default class IoIosPeople extends SvelteComponentTyped<IoIosPeopleProps, IoIosPeopleEvents, IoIosPeopleSlots> {
}
export {};
