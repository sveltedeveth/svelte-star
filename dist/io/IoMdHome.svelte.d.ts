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
export type IoMdHomeProps = typeof __propDef.props;
export type IoMdHomeEvents = typeof __propDef.events;
export type IoMdHomeSlots = typeof __propDef.slots;
export default class IoMdHome extends SvelteComponentTyped<IoMdHomeProps, IoMdHomeEvents, IoMdHomeSlots> {
}
export {};
