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
export type GiTwirlCenterProps = typeof __propDef.props;
export type GiTwirlCenterEvents = typeof __propDef.events;
export type GiTwirlCenterSlots = typeof __propDef.slots;
export default class GiTwirlCenter extends SvelteComponentTyped<GiTwirlCenterProps, GiTwirlCenterEvents, GiTwirlCenterSlots> {
}
export {};
