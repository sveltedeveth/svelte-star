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
export type GiOverlordHelmProps = typeof __propDef.props;
export type GiOverlordHelmEvents = typeof __propDef.events;
export type GiOverlordHelmSlots = typeof __propDef.slots;
export default class GiOverlordHelm extends SvelteComponentTyped<GiOverlordHelmProps, GiOverlordHelmEvents, GiOverlordHelmSlots> {
}
export {};
