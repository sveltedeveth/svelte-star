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
export type GiDiamondHiltProps = typeof __propDef.props;
export type GiDiamondHiltEvents = typeof __propDef.events;
export type GiDiamondHiltSlots = typeof __propDef.slots;
export default class GiDiamondHilt extends SvelteComponentTyped<GiDiamondHiltProps, GiDiamondHiltEvents, GiDiamondHiltSlots> {
}
export {};
