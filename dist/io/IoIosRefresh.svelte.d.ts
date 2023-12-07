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
export type IoIosRefreshProps = typeof __propDef.props;
export type IoIosRefreshEvents = typeof __propDef.events;
export type IoIosRefreshSlots = typeof __propDef.slots;
export default class IoIosRefresh extends SvelteComponentTyped<IoIosRefreshProps, IoIosRefreshEvents, IoIosRefreshSlots> {
}
export {};
