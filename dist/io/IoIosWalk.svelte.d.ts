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
export type IoIosWalkProps = typeof __propDef.props;
export type IoIosWalkEvents = typeof __propDef.events;
export type IoIosWalkSlots = typeof __propDef.slots;
export default class IoIosWalk extends SvelteComponentTyped<IoIosWalkProps, IoIosWalkEvents, IoIosWalkSlots> {
}
export {};
