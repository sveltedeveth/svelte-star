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
export type GiMasterOfArmsProps = typeof __propDef.props;
export type GiMasterOfArmsEvents = typeof __propDef.events;
export type GiMasterOfArmsSlots = typeof __propDef.slots;
export default class GiMasterOfArms extends SvelteComponentTyped<GiMasterOfArmsProps, GiMasterOfArmsEvents, GiMasterOfArmsSlots> {
}
export {};
