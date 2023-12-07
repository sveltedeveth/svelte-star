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
export type GiTvTowerProps = typeof __propDef.props;
export type GiTvTowerEvents = typeof __propDef.events;
export type GiTvTowerSlots = typeof __propDef.slots;
export default class GiTvTower extends SvelteComponentTyped<GiTvTowerProps, GiTvTowerEvents, GiTvTowerSlots> {
}
export {};
