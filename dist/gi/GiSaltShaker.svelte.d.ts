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
export type GiSaltShakerProps = typeof __propDef.props;
export type GiSaltShakerEvents = typeof __propDef.events;
export type GiSaltShakerSlots = typeof __propDef.slots;
export default class GiSaltShaker extends SvelteComponentTyped<GiSaltShakerProps, GiSaltShakerEvents, GiSaltShakerSlots> {
}
export {};
