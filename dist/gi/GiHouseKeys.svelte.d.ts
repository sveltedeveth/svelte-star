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
export type GiHouseKeysProps = typeof __propDef.props;
export type GiHouseKeysEvents = typeof __propDef.events;
export type GiHouseKeysSlots = typeof __propDef.slots;
export default class GiHouseKeys extends SvelteComponentTyped<GiHouseKeysProps, GiHouseKeysEvents, GiHouseKeysSlots> {
}
export {};
