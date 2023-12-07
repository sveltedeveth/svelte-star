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
export type GiHighKickProps = typeof __propDef.props;
export type GiHighKickEvents = typeof __propDef.events;
export type GiHighKickSlots = typeof __propDef.slots;
export default class GiHighKick extends SvelteComponentTyped<GiHighKickProps, GiHighKickEvents, GiHighKickSlots> {
}
export {};
