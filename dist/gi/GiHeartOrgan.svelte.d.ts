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
export type GiHeartOrganProps = typeof __propDef.props;
export type GiHeartOrganEvents = typeof __propDef.events;
export type GiHeartOrganSlots = typeof __propDef.slots;
export default class GiHeartOrgan extends SvelteComponentTyped<GiHeartOrganProps, GiHeartOrganEvents, GiHeartOrganSlots> {
}
export {};
