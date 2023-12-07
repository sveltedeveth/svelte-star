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
export type GiMucousPillarProps = typeof __propDef.props;
export type GiMucousPillarEvents = typeof __propDef.events;
export type GiMucousPillarSlots = typeof __propDef.slots;
export default class GiMucousPillar extends SvelteComponentTyped<GiMucousPillarProps, GiMucousPillarEvents, GiMucousPillarSlots> {
}
export {};
