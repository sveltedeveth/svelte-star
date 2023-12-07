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
export type FaChromecastProps = typeof __propDef.props;
export type FaChromecastEvents = typeof __propDef.events;
export type FaChromecastSlots = typeof __propDef.slots;
export default class FaChromecast extends SvelteComponentTyped<FaChromecastProps, FaChromecastEvents, FaChromecastSlots> {
}
export {};
