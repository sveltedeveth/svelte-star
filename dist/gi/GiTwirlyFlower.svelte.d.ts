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
export type GiTwirlyFlowerProps = typeof __propDef.props;
export type GiTwirlyFlowerEvents = typeof __propDef.events;
export type GiTwirlyFlowerSlots = typeof __propDef.slots;
export default class GiTwirlyFlower extends SvelteComponentTyped<GiTwirlyFlowerProps, GiTwirlyFlowerEvents, GiTwirlyFlowerSlots> {
}
export {};
