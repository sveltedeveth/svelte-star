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
export type GiDiamondHardProps = typeof __propDef.props;
export type GiDiamondHardEvents = typeof __propDef.events;
export type GiDiamondHardSlots = typeof __propDef.slots;
export default class GiDiamondHard extends SvelteComponentTyped<GiDiamondHardProps, GiDiamondHardEvents, GiDiamondHardSlots> {
}
export {};
